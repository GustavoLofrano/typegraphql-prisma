import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieListRelationFilter {
  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: MovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: MovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: MovieWhereInput | undefined;
}
