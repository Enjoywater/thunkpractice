import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './modules';
import './App.css';
import { githubUserAction } from './modules/githubUser';

function App() {
  const [inputText, setInputText] = useState<string>('');

  const state = useSelector((selector: RootState) => ({
    githubUser: selector.githubUserReducers,
  }));
  const dispatch = useDispatch();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputText(value);
  };

  const handleApi = (text: string) => {
    dispatch(githubUserAction(text));
  };

  console.log(state.githubUser.data);

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '300px',
      }}
    >
      <input
        style={{ width: '150px', height: '30px', marginBottom: '20px' }}
        value={inputText}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInput(e)}
        placeholder="enter your github name"
      />
      <button
        style={{ width: '50px', height: '30px' }}
        onClick={() => handleApi(inputText)}
      >
        {state.githubUser.loading ? 'loading' : 'call'}
      </button>
      <div>
        {state.githubUser.data
          ? Object.entries(state.githubUser.data).map((item, i) => (
              <div key={i}>
                <span>{`${item[0]} - `}</span>
                <span>{` ${item[1]}`}</span>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default App;
