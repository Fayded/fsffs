import { Resolver, Query, Arg } from 'type-graphql'
import { Video } from './videos'
import videos from './videos.json'


@Resolver(Video)
export class VideosResolver {
  @Query(() => [Video])
  videos(): Video[] {
    return videos
  }
}