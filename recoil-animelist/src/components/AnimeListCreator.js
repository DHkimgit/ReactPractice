import React, { useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { animeListState } from './AnimeList'
import './AnimeListCreator.scss'

let id=0;
function getId() {
  return id++;
}

function AnimeListCreator() {
  const [inputValue, setInputValue] = useState({
    animeName: '',
    watchDate: ''
  });
  const {animeName, watchDate} = inputValue;
  const setAnimeList = useSetRecoilState(animeListState);
  const List = useRecoilState(animeListState);
  const addAnime = () => {
    setAnimeList((OldAnimeList) => [
      ...OldAnimeList,
      {
        id: getId(),
        animeName: inputValue.animeName,
        watchDate: inputValue.watchDate,
      }
    ])
    setInputValue('');
    console.log(List);
  }


  const onChange = (event) => {
    const {value, name} = event.target;
    setInputValue({
      ...inputValue,
      [name]: value
    });
  }

  return(
    <>
      <form className='animeNameInput'>
      <input 
        type="text"
        name='animeName'
        placeholder='insertAnimeName'
        value={animeName}
        onChange = {onChange}
      />
    </form>
    <form className='watchDateInput'>
    <input 
      type="text"
      name='watchDate'
      placeholder='ex) 2022-02-03'
      value={watchDate}
      onChange = {onChange}
    />
     </form>
     <button onClick = {addAnime}>+</button>
  </>
  )
};

export default AnimeListCreator;