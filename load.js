const https = require('https');
const fs = require('fs');
const dir = 'images';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir)
}
for (let i = 0; i < 120; i++) {
    const url = `https://www.amc.com/twdu/images/atmosphereEffects/FX02_Pollen/images/vfx_anim-sheet${i}.png`;
    const file = fs.createWriteStream(`${dir}/vfx_anim-sheet${i}.png`);
    https.get(url, (res) => res.pipe(file));
}