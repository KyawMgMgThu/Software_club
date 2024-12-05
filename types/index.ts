// ====== USER PARAMS
export type CreateUserParams = {
  clerkId: string
  username: string
  email: string
  photo: string
}

export type UpdateUserParams = {
  username: string
  photo: string
}

export type CreateAnnouncementParams = {
  userId: string
  event: {
    title: string
    description: string
    imageUrl: string
    startDateTime: Date
    endDateTime: Date
    url: string
  }
  path: string
}

export type UpdateAnnouncementParams = {
  userId: string
  event: {
    _id: string
    title: string
    imageUrl: string
    description: string
    startDateTime: Date
    endDateTime: Date
    url: string
  }
  path: string
}

export type DeleteAnnouncementParams = {
  eventId: string
  path: string
}


export type Announcement = {
  _id: string
  title: string
  description: string
  imageUrl: string
  location: string
  startDateTime: Date
  endDateTime: Date
  url: string
  organizer: {
    _id: string
  }
}

// ====== URL QUERY PARAMS
export type UrlQueryParams = {
  params: string
  key: string
  value: string | null
}

export type RemoveUrlQueryParams = {
  params: string
  keysToRemove: string[]
}

export type SearchParamProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}