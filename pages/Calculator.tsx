import Head from 'next/head'
import dynamic from 'next/dynamic'
import React from 'react'
import styles from '../styles/Calculator.module.css'


let txtsquareinput = React.createRef<HTMLInputElement>();
let txtsquareoutput = React.createRef<HTMLInputElement>();
let txtrootinput = React.createRef<HTMLInputElement>();
let txtrootoutput = React.createRef<HTMLInputElement>();

export default function Home() {
  return (
    <div>
      <Head>
        <title>Calculator tsx</title>
        <link rel="icon" href="/favicon.ico" />
        <script data-ad-client="ca-pub-4059701523804358" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Odibee+Sans&family=PT+Sans&display=swap" rel="stylesheet" />
      </Head>

      <main >
        <div className={styles.divBigDiv}>
          <div className={styles.calcForm}>
            <div>
              <label className={styles.labelA}>This is an example Calculator</label>
            </div>
            <div>
              <div className={styles.textdiv}>
                <label>Type a Number: </label>

                <input id="t1" className={styles.text+" " + styles.t1} onKeyUp={calcsquare} placeholder="0"></input>
              </div>
              {/* <button onclick="calc()" className="button">Calculator</button>  */}
              <div className={styles.textdiv} >
                <label >This is its square:</label>
                <input id="t2" className={ styles.text+" " + styles.t2}></input>
              </div>
            </div>
            <div>  {/* <div style={margin: 30px;{> */}
              <style jsx>{'margin-top: 30px;'}</style>
              <label className={styles.labelA}>This is a Calculator with a Button</label>
            </div>
            {/* <div style={ display: flex; align-items: center; flex-direction: column;{> */}
            <div className={styles.buttonwrapperdiv}>    
              <div className={styles.textdiv}>
                <label>Type a Number: </label>
                <input id="t3"  ref={txtsquareinput} className={ styles.text + " " + styles.t1}  placeholder="0" ></input>
              </div>
              <button onClick={calcroot} className={styles.button}>Calculate</button>
              <div className={styles.textdiv}>
                <label >This is its squareroot:</label>
                <input id="t4" ref={txtrootoutput} className={ styles.text + " " + styles.t2}></input>
              </div>
              {/* <button onClick={f} id={josias" className="button2">Calculate</button> */}

            </div>

          </div>
        </div>
      </main>
    </div>
  )
}


function f() {
  if (typeof window !== 'undefined') {
    console.log(document.getElementById('josias'));
    document.getElementById('josias').textContent = "oh my goosh"
  }
}

function calcsquare() {
  if (typeof window === 'undefined') 
  {
    console.log('no window found');
  return;
  }
  var s = parseInt(document.getElementById('t1').value);
  if (!isNaN(s))
 document.getElementById('t2').value = (s * s).toString();
  else
  document.getElementById('t2').value= "u r too clever";
  // var s = parseInt(txtsquareinput.current.value);
  // if (!isNaN(s))
  //  txtsquareoutput.current.value = (s * s).toString();
  // else
  // txtsquareoutput.current.value = "u r too clever";


}
function calcroot() {
  if (typeof window === 'undefined') 
  {
    console.log('no window found');
  return;
  }
  if(document.getElementById('t3').value == '')
  document.getElementById('t3').value='0';
  var s = parseInt(document.getElementById('t3').value);
if (s >= 0)
document.getElementById('t4').value = Math.sqrt(s).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 0 });
  else
  document.getElementById('t4').value = "u r too clever";
  // var s = parseInt(txtrootinput.current.value);
  // if (s >= 0)
  //   txtrootoutput.current.value = Math.sqrt(s).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 0 });
  // else
  //   txtrootoutput.current.value = "u r too clever";

}