// Define the shape of a navigation link
export interface HeaderLink {
    label: string;
    url?: string; // Make the url optional in case it's a dropdown container
    external?: boolean; // Optional flag if the link opens an external page
    subLinks?: HeaderLink[]; // Optional array for dropdown links
}
