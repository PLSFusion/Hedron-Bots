const { ethers } = require('ethers');
const emoji = require('node-emoji');
const schedule = require('node-schedule');
const TelegramBot = require('node-telegram-bot-api');

const { hedronAddr, hedronABI } = require('./abi/hedron');
const { infuraProject, telegramApiKey, telegramChatId} = require('./secrets');

const provider = {
  ethereum: new ethers.providers.InfuraProvider('homestead', {
    projectId: infuraProject.id,
    projectSecret: infuraProject.secret
  })
};

const telegramBot = new TelegramBot(telegramApiKey);

const hedron = {
  ethereum: new ethers.Contract(hedronAddr.ethereum, hedronABI, provider.ethereum)
};

let claimCount = 0;

schedule.scheduleJob('0 0 * * * *', () => {
  if (claimCount > 0) {
    let message = '<b>' + claimCount + ' HEX stakes</b> have been claimed in the past hour!';
    telegramBot.sendMessage(telegramChatId, message, {parse_mode: 'HTML'});
    claimCount = 0;
  }
});

hedron.ethereum.on('Claim', () => {
  claimCount++;
});

hedron.ethereum.on('Mint', async (data, minter) => {
  let dataArray = ethers.utils.arrayify(data);
  dataArray = ethers.utils.zeroPad(dataArray, 32);

  let addr = String(minter).slice(0, String(minter).length - 38);
  addr = addr + '...';
  addr = addr + String(minter).slice(38);

  let addrLink = '<a href="https://etherscan.io/address/' +
                   String(minter) +
                   '">' +
                   addr +
                   '</a>';
    
    
  let minted = ethers.utils.formatUnits(ethers.BigNumber.from(dataArray.slice(0, 15)), 9);
  minted = minted.slice(0, minted.length - 7);

  let stakerClass;

  if (Number(minted) >= 100000000000) {
    stakerClass = ':whale:';
  } else if (Number(minted) >= 10000000000) {
    stakerClass = ':shark:';
  } else if (Number(minted) >= 1000000000) {
    stakerClass = ':dolphin:';
  } else if (Number(minted) >= 100000000) {
    stakerClass = ':squid:';
  } else if (Number(minted) >= 10000000) {
    stakerClass = ':turtle:';
  } else if (Number(minted) >= 1000000) {
    stakerClass = ':crab:';
  } else if (Number(minted) >= 100000) {
    stakerClass = ':shrimp:';
  } else {
    stakerClass = ':shell:';
  }


  if (Number(minted) >= 1000000000) {
    minted = '<b>' + minted + ' HDRN</b>';

    let bonus  = '<b>' + String(ethers.BigNumber.from(dataArray.slice(15, 16)).toNumber() / 10) + 'x Multiplier</b>';

    let message = addrLink + ' ' + stakerClass + ' Just minted ' + minted + ' with a ' + bonus + '!';
    console.log(message);

    message = emoji.emojify(message);

    telegramBot.sendMessage(telegramChatId, message, {parse_mode: 'HTML'});
  }
});

hedron.ethereum.on('LoanStart', async (data, minter) => {
  let dataArray = ethers.utils.arrayify(data);
  dataArray = ethers.utils.zeroPad(dataArray, 32);

  let addr = String(minter).slice(0, String(minter).length - 38);
  addr = addr + '...';
  addr = addr + String(minter).slice(38);

  let addrLink = '<a href="https://etherscan.io/address/' +
                   String(minter) +
                   '">' +
                   addr +
                   '</a>';
    
    
  let minted = ethers.utils.formatUnits(ethers.BigNumber.from(dataArray.slice(0, 12)), 9);
  minted = minted.slice(0, minted.length - 7);

  let stakerClass;

  if (Number(minted) >= 10000000000) {
    stakerClass = ':whale:';
  } else if (Number(minted) >= 1000000000) {
    stakerClass = ':shark:';
  } else if (Number(minted) >= 100000000) {
    stakerClass = ':dolphin:';
  } else if (Number(minted) >= 10000000) {
    stakerClass = ':squid:';
  } else if (Number(minted) >= 1000000) {
    stakerClass = ':turtle:';
  } else if (Number(minted) >= 100000) {
    stakerClass = ':crab:';
  } else if (Number(minted) >= 10000) {
    stakerClass = ':shrimp:';
  } else {
    stakerClass = ':shell:';
  }


  if (Number(minted) >= 100000000) {
    minted = '<b>' + minted + ' HDRN</b>';

    let message = addrLink + ' ' + stakerClass + ' Just borrowed ' + minted + '!';
    console.log(message);

    message = emoji.emojify(message);

    telegramBot.sendMessage(telegramChatId, message, {parse_mode: 'HTML'});
  }
});

hedron.ethereum.on('LoanLiquidateStart', async (data, borrower, stakeId, liquidationId) => {
  let liquidation = await hedron.ethereum.liquidationList(
    liquidationId
  );

  let hsiAddr = String(liquidation.hsiAddress).slice(0, String(liquidation.hsiAddress).length - 38);
  hsiAddr = hsiAddr + '...';
  hsiAddr = hsiAddr + String(liquidation.hsiAddress).slice(38);

  let hsiAddrLink = '<a href="https://etherscan.io/address/' +
    String(liquidation.hsiAddress) +
    '">' +
    hsiAddr +
    '</a>';

  let message = 'HSI: ' + hsiAddrLink + ' Just went to auction!';
  console.log(message);

  message = emoji.emojify(message);

  telegramBot.sendMessage(telegramChatId, message, {parse_mode: 'HTML'});
});

hedron.ethereum.on('LoanLiquidateExit', async (data, liquidator, stakeId, liquidationId) => {
  let dataArray = ethers.utils.arrayify(data);
  dataArray = ethers.utils.zeroPad(dataArray, 32);

  let addr = String(liquidator).slice(0, String(liquidator).length - 38);
  addr = addr + '...';
  addr = addr + String(liquidator).slice(38);

  let addrLink = '<a href="https://etherscan.io/address/' +
                   String(liquidator) +
                   '">' +
                   addr +
                   '</a>';

  let liquidation = await hedron.ethereum.liquidationList(
    liquidationId
  );

  let hsiAddr = String(liquidation.hsiAddress).slice(0, String(liquidation.hsiAddress).length - 38);
  hsiAddr = hsiAddr + '...';
  hsiAddr = hsiAddr + String(liquidation.hsiAddress).slice(38);

  let hsiAddrLink = '<a href="https://etherscan.io/address/' +
    String(liquidation.hsiAddress) +
    '">' +
    hsiAddr +
    '</a>';

  let bid = ethers.utils.formatUnits(ethers.BigNumber.from(dataArray.slice(0, 27)), 9);
  bid = bid.slice(0, bid.length - 7);
  bid = '<b>' + bid + ' HDRN</b>';

  let message = addrLink + ' Just won the auction for HSI ' + hsiAddrLink + ' with a bid of ' + bid + '!';
  console.log(message);

  message = emoji.emojify(message);

  telegramBot.sendMessage(telegramChatId, message, {parse_mode: 'HTML'});
});