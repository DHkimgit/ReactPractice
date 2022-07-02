import React from 'react';
import { atom, RecoilRoot } from 'recoil';
import AnimeListCreator from './AnimeListCreator';
import AnimeListTemplate from './AnimeListTemplate';

export const animeListState = atom({
  key: 'animeListState',
  default: []
})

function AnimeList() {
  return(
    <>
      <RecoilRoot>
        <AnimeListTemplate />
        <AnimeListCreator />
      </RecoilRoot>
    </>
  )
}

export default AnimeList;