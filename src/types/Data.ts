export type PokemonResultType = {
  name: string;
  url: string;
};

export type PokemonListType = {
  results: PokemonResultType[];
};

export type PokemonDataType = {
  name: string;
  order: number;
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
};
