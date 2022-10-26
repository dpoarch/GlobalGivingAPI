export interface allProjectList {
    projects: Projects;
}

export interface Projects {
    hasNext:       string;
    nextProjectId: string;
    project:       Project[];
    _numberFound:  string;
}

export interface Project {
    active:                 string;
    activities:             string;
    approvedDate:           Date;
    contactAddress:         string;
    contactAddress2:        string;
    contactCity:            string;
    contactCountry:         string;
    contactName:            string;
    contactPostal:          string;
    contactState:           string;
    contactTitle:           string;
    contactUrl:             string;
    countries:              Countries;
    country:                string;
    dateOfMostRecentReport: Date;
    donationOptions:        DonationOptions;
    funding:                string;
    goal:                   string;
    id:                     string;
    image:                  Image;
    imageGallerySize:       string;
    imageLink:              string;
    iso3166CountryCode:     string;
    latitude:               string;
    longTermImpact:         string;
    longitude:              string;
    modifiedDate:           Date;
    need:                   string;
    numberOfDonations:      string;
    numberOfReports:        string;
    organization:           Organization;
    progressReportLink:     string;
    projectLink:            string;
    region:                 string;
    remaining:              string;
    status:                 string;
    summary:                string;
    themeName:              string;
    themes:                 ProjectThemes;
    title:                  string;
    type:                   string;
}

export interface Countries {
    country: Country;
}

export interface Country {
    iso3166CountryCode: string;
    name:               string;
}

export interface DonationOptions {
    donationOption: DonationOption[];
}

export interface DonationOption {
    amount:      string;
    description: string;
}

export interface Image {
    imagelink: Imagelink[];
    title:     string;
    _id:       string;
}

export interface Imagelink {
    url:   string;
    _size: string;
}

export interface Organization {
    activeProjects:     string;
    addressLine1:       string;
    addressLine2:       string;
    city:               string;
    countries:          Countries;
    country:            string;
    id:                 string;
    iso3166CountryCode: string;
    logoUrl:            string;
    mission:            string;
    name:               string;
    postal:             string;
    state:              string;
    themes:             OrganizationThemes;
    totalProjects:      string;
    url:                string;
}

export interface OrganizationThemes {
    theme: Theme[];
}

export interface Theme {
    id:   string;
    name: string;
}

export interface ProjectThemes {
    theme: Theme;
}