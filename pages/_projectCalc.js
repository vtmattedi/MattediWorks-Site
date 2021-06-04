import Head from 'next/head'
import dynamic from 'next/dynamic'
import React from 'react'



export default function Home() {
 let txtoutput = React.createRef();
  let txtinput = React.createRef();
  function calculate(params) {
    txtoutput.current.innerHTML = txtinput.current.innerHTML;
    return;
  
  }
  return (
    <div >
      <Head>
        <title>calculator</title>
        <link rel="icon" href="/favicon.ico" />
        <script data-ad-client="ca-pub-4059701523804358" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>

      <main className="">
        This is a Calculator Example

        <div className="calcForm">
            <input ref={txtinput} className="calcInputBox" id="txtinput">
            </input>
            <button onClick={calculate}>Submit</button>
            <input ref={txtoutput}>
            </input>
        </div>
      </main>
    </div>
  )
}


