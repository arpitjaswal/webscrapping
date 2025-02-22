import puppeteer from "puppeteer"

const getGitInfo = async ()=>{
	const browser=await puppeteer.launch({
		headless:false,
		defaultViewport:null,
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
	});

	const page = await browser.newPage();

	await page.goto("https://github.com/arpitjaswal?tab=repositories",{
	waitUntil:"domcontentloaded",	
	});

	const quotes = await page.evaluate(()=>{
		const gitProjects = document.querySelector("col-12 d-flex flex-justify-between width-full py-4 border-bottom color-border-muted public source");
		return {gitProjects}
	})
	console.log(quotes)


};

getGitInfo();
