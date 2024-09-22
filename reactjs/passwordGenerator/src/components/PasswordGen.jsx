import { useCallback, useEffect, useRef, useState } from 'react'

function PasswordGen() {
  const [range, setRange] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [btnText, setBtnText] = useState('copy');

  const passRef = useRef(null);

  const copyToClipBoard = useCallback(()=> {
    // passRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setBtnText('copied!')
    setTimeout(() => setBtnText('copy'), 1000);
  }, [password]);

  const generatePassword = useCallback(() => {
    let pass = ""
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed) string += '0123456789'
    if(charAllowed) string += '!<>?/[]+=&%*#@^()'

    for(let i=0; i<range;i++){
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [range, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    generatePassword()
  }, [range, numberAllowed, charAllowed]);

  return (
    <>
      <div>
        <div>
          <input 
          type="text" 
          name=""
          value={password}
          ref={passRef}
          readOnly
          placeholder='Password'
          />
          <button
          onClick={copyToClipBoard}
          value={btnText}
          >{btnText}</button>
        </div>
        <div>
          <input type="range"
          min={8}
          max={25}
          onChange={(e) => setRange(e.target.value)}
          value={range}
           name="range" id="" />
          <label htmlFor="range">Range: {range} </label>
          <input
          onChange={() => 
          setNumberAllowed(prev => !prev)
          }
          value={numberAllowed}
          type="checkbox" />
          <label htmlFor="Numbers">Numbers</label>
          <input type="checkbox"
          onChange={() => 
            setCharAllowed(prev => !prev)
            }
            value={charAllowed}
          />
          <label htmlFor="Numbers">Characters</label>
        </div>
      </div>
    </>
  )
}

export default PasswordGen
