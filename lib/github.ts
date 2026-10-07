const CONTRIBUTIONS_API = 'https://github-contributions-api.jogruber.de/v4';

// How long the fetched data is reused before Next.js asks for it again.
const REVALIDATE_SECONDS = 60 * 60 * 6;

export type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type Contributions = {
  total: number;
  days: ContributionDay[];
};

// Public contribution history for the last year. Returns null when the
// service cannot be reached, so the page still renders without the graph.
export async function getContributions(
  username: string,
): Promise<Contributions | null> {
  try {
    const response = await fetch(`${CONTRIBUTIONS_API}/${username}?y=last`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      throw new Error(`Contributions API responded with ${response.status}`);
    }

    const data: {
      total: { lastYear: number };
      contributions: ContributionDay[];
    } = await response.json();

    if (!Array.isArray(data.contributions) || data.contributions.length === 0) {
      throw new Error('Contributions API returned no days');
    }

    return { total: data.total.lastYear, days: data.contributions };
  } catch (error) {
    console.error('Could not load GitHub contributions:', error);
    return null;
  }
}
