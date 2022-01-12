export interface Result {
    resultTitle: string;
    resultDescription: string;
    resultThumbnail?: ResultThumbnail;
    authors: Author[];
    citation: Citation[];
}

export interface Author {
    authorName: string;
    authorSurname: string;
}

export interface ResultThumbnail {
    thumbnailUrl: string;
    thumbnailAltText: string;
}

export interface Citation {
    citationType: 'BIBTEX' | 'APA';
    citationContent: string;
}
