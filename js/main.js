const fetchRandomHomepageImage = async () => {
    const req = await axios.get("https://axolotlapi-test.kirondevcoder.repl.co/reddit?flair=Just%20Showing%20Off%20%F0%9F%98%8D&minMedia=1");
    console.log(req.data.data[0]);
}

fetchRandomHomepageImage();