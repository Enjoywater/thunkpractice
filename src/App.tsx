import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './modules';
import './App.css';
import { githubUserAction } from './modules/githubUser';
import { JpUserAction } from './modules/jpUser';

function App() {
  const [apiName, setApiName] = useState<string>('');
  const [inputText, setInputText] = useState<string>('');

  const state = useSelector((selector: RootState) => ({
    githubUser: selector.githubUserReducers,
    jpUser: selector.JpUserReducer,
  }));
  const dispatch = useDispatch();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputText(value);
  };

  const handleApi = (text: string) => {
    if (apiName === 'git') return dispatch(githubUserAction(text));
    if (apiName === 'jp') return dispatch(JpUserAction());
  };

  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '600px',
        }}
      >
        <button
          style={{ marginBottom: '10px' }}
          onClick={() => setApiName('git')}
        >
          git
        </button>
        <button
          style={{ marginBottom: '100px' }}
          onClick={() => setApiName('jp')}
        >
          jp
        </button>
        {apiName === 'git' && (
          <>
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
                      <div>{`${item[0].toLocaleUpperCase()}`}</div>
                      <div>{`${item[1]}`}</div>
                      <div>---</div>
                    </div>
                  ))
                : null}
            </div>
          </>
        )}
        {apiName === 'jp' && (
          <>
            <button
              style={{ width: '50px', height: '30px' }}
              onClick={() => handleApi('')}
            >
              {state.jpUser.loading ? 'loading' : 'call'}
            </button>
            click call button and see console
          </>
        )}
      </div>
    </div>
  );
}

export default App;
