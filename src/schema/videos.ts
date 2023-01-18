import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType() 
export class Video {
  @Field(() => ID) 
    id: number;

  @Field(() => String)
    title: string
  
  @Field(() => String)
    description: string
  
  @Field(() => String)
    thumbnail_small: string
  
  @Field(() => String)
    thumbnail_medium: string

  @Field(() => String)
    thumbnail_large: string
}