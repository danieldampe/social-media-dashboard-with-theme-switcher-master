export interface SocialMediaStatistics {
  readonly socialMedia: SocialMedia
  readonly username: string
  readonly followers: Followers
  readonly overview: Overview[]
}

export interface Followers {
  readonly parameter: string
  readonly total: number
  readonly today: number
}

export interface Overview {
  readonly parameter: string
  readonly today: number
  readonly percentage: number
}

export interface SocialMedia {
  readonly name: string
  readonly icon: string
  readonly color: string
}
