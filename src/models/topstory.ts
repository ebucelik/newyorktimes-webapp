import { Result } from "./result";

export interface TopStory {
    status: string;
    copyright: string;
    section: string;
    last_updated: string;
    num_results: number;
    results: Result[];
}