// components/Layout/Footer.js

<<<<<<< HEAD
import React, {useEffect, useState, useContext, useRef} from 'react';
import { WebTraderContext } from './WebTraderContext';
import axios from 'axios'
import { AuthContext } from '../Pages/Auth/AuthProvider';
import appConfig from '../../../app-config';
const BuySell = () => {
  const { symbolInfo } = useContext(WebTraderContext);
  const { account, getAccountById } = useContext(AuthContext);

  useEffect(()=>{
    console.log('symbol info ', symbolInfo)
  },[symbolInfo, account])
  const buyValueRef = useRef()
  const sellValueRef = useRef()
  const [calculatedBuyPrice, setCalculatedBuyPrice] = useState(0);
  const [calculatedSellPrice, setCalculatedSellPrice] = useState(0);
  const [calculatedSellValue, setCalculatedSellValue] = useState(0);
  const [calculatedBuyValue, setCalculatedBuyValue] = useState(0);

  const handleBuyInputChange = () => {
    const inputValue = parseFloat(buyValueRef.current.value || "0");
    setCalculatedBuyPrice(symbolInfo.buyPricePerShare * inputValue);
    setCalculatedBuyValue(inputValue)
  };

  const handleSellInputChange = () => {
    const inputValue = parseFloat(sellValueRef.current.value || "0");
    setCalculatedSellPrice(symbolInfo.sellPricePerShare * inputValue);
    setCalculatedSellValue(inputValue)
  };
  function showSuccessModal() {
    const modal = document.getElementById("successModal");
    const span = document.getElementsByClassName("close")[0];
    const button = document.getElementsByClassName("modalbtn")[0];

    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
    }

    button.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  }

  function showFailModal() {
    const modal = document.getElementById("failModal");
    const span = document.getElementsByClassName("close")[1];
    const button = document.getElementsByClassName("modalbtn")[1];

    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
    }

    button.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

  async function buy(){
    await placeOrder('buy')
  }
  async function sell(){
    await placeOrder('sell')
  }
  async function placeOrder(flag){
=======
import React, {useEffect, useState, useContext} from 'react';
import { WebTraderContext } from './WebTraderContext';
import axios from 'axios'

const BuySell = () => {
  const { symbolInfo } = useContext(WebTraderContext);
  useEffect(()=>{
    console.log('symbol info ', symbolInfo)
  },[symbolInfo])
  function buy(){
    placeOrder('buy')
  }
  function sell(){
    placeOrder('sell')
  }
  function placeOrder(flag){
>>>>>>> refs/remotes/origin/master
    let price
    let value
    let symbol = document.getElementById('symbol')
    switch (flag) {
      case 'buy':
        price = symbolInfo.buyPrice
<<<<<<< HEAD
        value = calculatedBuyValue || 0.001
=======
        value = symbolInfo.buyValue
>>>>>>> refs/remotes/origin/master
        // price = document.getElementById('buyprice')
        // value = document.getElementById('buyvalue')
        break;
    
      case 'sell':
        price = symbolInfo.sellPrice
<<<<<<< HEAD
        value = calculatedSellValue || 0.001
=======
        value = symbolInfo.sellValue
>>>>>>> refs/remotes/origin/master
        // price = document.getElementById('sellprice')
        // value = document.getElementById('sellvalue')
        break;

      default:
        break;
    }
    let body = {
      'symbol': symbolInfo.symbol,
      'side': flag,
      'price': price,
      'qty': value,
      'flag': flag
    }
    const token = localStorage.getItem("propAuthToken");

    let config = {
      method: 'post',
      // maxBodyLength: Infinity,
      // url: 'http://localhost:5000/api/auth/login',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      data: body
    };

<<<<<<< HEAD
    axios(`${appConfig.BACKEND_BASE_URL}/api/order/place_order`, config)
    .then((response) => {
      console.log(JSON.stringify(response.data));

      showSuccessModal()
    })
    .catch((error) => {
      console.log(error);
      showFailModal()
    });

    //this also sets the account on the context
    let account = await getAccountById()
=======
    axios('http://localhost:5001/api/order/place_order', config)
    .then((response) => {
      console.log(JSON.stringify(response.data));

      // let token = response.data.user.token
      // if(token) {
      //   localStorage.setItem('propAuthToken', JSON.stringify({ token})); 
      //   // const navigate = useNavigate();
      //   // navigate('/Dashboard');
      //   setLoginSuccessful(true)
      // }

    })
    .catch((error) => {
      console.log(error);
    });
>>>>>>> refs/remotes/origin/master
  }
  return (
    <div className='col px-4 my-4'>
      <div>{symbolInfo.symbol}</div>
      <div className='row'>
        <div className='col-4'>Spot Trading</div>
<<<<<<< HEAD
        <div className='col-8' style={{"margin-left": '-50px'}}><span>Available Balance </span><span><b>{account.last_equity}USD</b></span></div>
=======
        <div className='col-8' style={{"margin-left": '-50px'}}><span>Available Balance </span><span><b>500USD</b></span></div>
>>>>>>> refs/remotes/origin/master
      </div>

      <div className='row'>
        <div className='col-4'>
          <div className='row'>
<<<<<<< HEAD
            <div className='col-4'>Price Per Share</div>
            <div className='col-4' id=''>{symbolInfo.buyPricePerShare}</div>
          </div>
          <div className='row'>
            <div className='col-4'>Price</div>
            <div className='col-4' id='buyprice'>{calculatedBuyPrice}</div>
          </div>
          <div className='row'>
            <div className='col-4'>Value</div>
            
            <div className='col-4'><input ref={buyValueRef} onChange={handleBuyInputChange} type="number" id='buyvalue' style={{width: '100px'}} step="1" min="0" placeholder="Enter a number" /></div>
            {/* <div className='col-4' id='buyvalue'>{symbolInfo.buyValue}</div> */}
=======
            <div className='col-4'>Price</div>
            <div className='col-4' id='buyprice'>{symbolInfo.buyPrice}</div>
          </div>
          <div className='row'>
            <div className='col-4'>Value</div>
            <div className='col-4' id='buyvalue'>{symbolInfo.buyValue}</div>
>>>>>>> refs/remotes/origin/master
          </div>
        </div>
        <div className='col-8'>
          <div className='row ms-2'>
<<<<<<< HEAD
            <div className='col-4'>Price Per Share</div>
            <div className='col-4' id='sellpricepershare'>{symbolInfo.sellPricePerShare}</div>
          </div>
          <div className='row ms-2'>
            <div className='col-4'>Price</div>
            <div className='col-4' id='sellprice'>{calculatedSellPrice}</div>
          </div>
          <div className='row ms-2' >
            <div className='col-4'>Value</div>
            
            <div className='col-4'><input ref={sellValueRef} onChange={handleSellInputChange} type="number" id='sellvalue' style={{width: '100px'}} step="1" min="0" placeholder="Enter a number" /></div>
            {/* <div className='col-4' id='sellvalue'>{symbolInfo.sellValue}</div> */}
=======
            <div className='col-4'>Price</div>
            <div className='col-4' id='sellprice'>{symbolInfo.sellPrice}</div>
          </div>
          <div className='row ms-2' >
            <div className='col-4'>Value</div>
            <div className='col-4' id='sellvalue'>{symbolInfo.sellValue}</div>
>>>>>>> refs/remotes/origin/master
          </div>
        </div>
      </div>

      <div className='row'>
        <div onClick = {buy} className='btn btn-success col-4'>
          Buy
        </div>
        <div onClick = {sell} className='btn col-4 ms-5 border-success text-success'>
          Sell
        </div>
      </div>
<<<<<<< HEAD

      <div id="successModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <image src="..\..\..\assets\correctmark.jpg" alt=""></image>
            <p>
                <bold>Successfully placed order</bold>
            </p>
            {/* <p>Keep Going!</p> */}
            <button class="modalbtn">Ok</button>
        </div>
      </div>

      <div id="failModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <image src="./graphics/oops.jpg" alt=""></image>
            <p>
                <bold>Oops</bold>
            </p>
            <p>Please Try Again!</p>
            <button class="modalbtn">Ok</button>
        </div>
    </div>
=======
>>>>>>> refs/remotes/origin/master
    </div>
  );
};

export default BuySell;
