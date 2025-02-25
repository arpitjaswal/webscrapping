import puppeteer from "puppeteer";
import {chromium,firefox,webkit} from "playwright";


const getGitInfo = async ()=>{
	const browser=await puppeteer.launch({
		headless:false,
		defaultViewport:null,
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
	});

	const page = await browser.newPage();

	await page.goto("https://quotes.toscrape.com/",{
	waitUntil:"domcontentloaded",	
	});

	const quotes = await page.evaluate(()=>{
		const quoteList = document.querySelectorAll(".quote");

		const FinalArray = Array.from(quoteList).map((quote)=>{
			
			const quoteText=quote.querySelector(".text").innerHTML;

                const author = quote.querySelector(".author").innerHTML;
		 return {quoteText,author}


		})
		return FinalArray;
	})
	console.log(quotes)


};

const usingPlayWright=async()=>{
	console.log("started using playwright");
	const browser=await chromium.launch();



	const page= await browser.newPage();
	await page.goto("https://www.google.com")
	


}


//getGitInfo();
usingPlayWright();
