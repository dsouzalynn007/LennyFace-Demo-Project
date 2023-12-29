import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors())

// Lenny faces array
let  LennyEyes = [
  ["⌐■", "■"],
  [" ͠°", " °"],
  ["⇀", "↼"],
  ["´• ", " •`"],
  ["´", "`"],
  ["`", "´"],
  ["ó", "ò"],
  ["ò", "ó"],
  ["⸌", "⸍"],
  [">", "<"],
  ["Ƹ̵̡", "Ʒ"],
  ["ᗒ", "ᗕ"],
  ["⟃", "⟄"],
  ["⪧", "⪦"],
  ["⪦", "⪧"],
  ["⪩", "⪨"],
  ["⪨", "⪩"],
  ["⪰", "⪯"],
  ["⫑", "⫒"],
  ["⨴", "⨵"],
  ["⩿", "⪀"],
  ["⩾", "⩽"],
  ["⩺", "⩹"],
  ["⩹", "⩺"],
  ["◥▶", "◀◤"],
  ["◍", "◎"],
  ["/͠-", "┐͡-\\"],
  ["⌣", "⌣”"],
  [" ͡⎚", " ͡⎚"],
  ["≋", "≋"],
  ["૦ઁ", "૦ઁ"],
  ["  ͯ","  ͯ" ],
  ["  ͌", "  ͌"],
  ["ළ", "ළ"],
  ["◉", "◉"],
  ["☉", "☉"],
  ["・", "・"],
  ["▰", "▰"],
  ["ᵔ", "ᵔ"],
  ["e", "e"],
  ["□", "□"],
  ["☼", "☼"],
  ["*", "*"],
  ["`", "`"],
  ["⚆", "⚆"],
  ["⊜", "⊜"],
  [">", ">"],
  ["❍", "❍"],
  ["￣", "￣"],
  ["─", "─"],
  ["✿", "✿"],
  ["•", "•"],
  ["T", "T"],
  ["^", ""],
  ["ⱺ", ""],
  ["@", ""],
  ["ȍ", ""],
  ["x", ""],
  ["-", "-"],
  ["$", "$"],
  ["Ȍ", "Ȍ"],
  ["ʘ", "ʘ"],
  ["Ꝋ", "Ꝋ"],
  ["⸟", "⸟"],
  ["๏", "๏"],
  ["ⴲ", "ⴲ"],
  ["◕", "◕"],
  ["◔", "◔"],
  ["✧", "✧"],
  ["■", "■"],
  ["♥", "♥"],
  ["👁️","👁️"],
  ["🌔", "🌔"],
  [" º ", " º "],
  ["⨶", "⨶"],
  ["⨱", "⨱"],
  ["🟣", "🟣"],
  ["⏒", "⏒"],
  ["⍜", "⍜"],
  ["⍤", "⍤"],
  ["ᚖ", "ᚖ"],
  ["ᴗ", "ᴗ"],
  ["ಠ", "ಠ"],
  ["σ", "σ"],
  ["☯", "☯"]
];
let LennyMouths = [
  ["v"],
  ["ᴥ"],
  ["ᗝ"],
  ["Ѡ"],
  ["ᗜ"],
  ["Ꮂ"],
  ["ᨓ"],
  ["ᨎ"],
  ["ヮ"],
  ["╭͜ʖ╮"],
  [" ͟ل͜"],
  [" ͜ʖ"],
  [" ͟ʖ"],
  [" ʖ̯"],
  ["ω"],
  [" ³"],
  [" ε "],
  ["﹏"],
  ["□"],
  ["ل͜"],
  ["‿"],
  ["╭╮"],
  ["‿‿"],
  ["▾"],
  ["‸"],
  ["Д"],
  ["∀"],
  ["!"],
  ["人"],
  ["."],
  ["ロ"],
  ["_"],
  ["෴"],
  ["ѽ"],
  ["ഌ"],
  ["⏠"],
  ["⏏"],
  ["⍊"],
  ["⍘"],
  ["ツ"],
  ["益"],
  ["╭∩╮"],
  ["Ĺ̯"],
  ["👅"],
  ["👄"],
  ["ﺪ͟͠"]
];
let LennyEars = [
  ["( ͡°( ͡° ͜ʖ( ", " )ʖ ͡°) ͡°)"],
  ["༼ ºل͟º ༼ ºل͟º ༼ ", " ༽ ºل͟º ༽ ºل͟º ༽"],
  ["┬─┬ノ( ", "ノ)"],
  ["̿̿ ̿̿ ̿̿ ̿'̿'\\͇̿̿\\= ( ", " ) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿"],
  ["(ノ", ")ノ彡┻━┻"],
  ["q", "p"],
  ["(ง", ")ง"],
  ["ʢ", "ʡ"],
  ["⸮", "?"],
  ["ʕ", "ʔ"],
  ["ᖗ", "ᖘ"],
  ["ᕦ", "ᕥ"],
  ["ᕦ(", ")ᕥ"],
  ["ᕙ(", ")ᕗ"],
  ["ᘳ", "ᘰ"],
  ["ᕮ", "ᕭ"],
  ["ᕳ", "ᕲ"],
  ["(", ")"],
  ["[", "]"],
  ["¯\\_", "_/¯"],
  ["୧", "୨"],
  ["୨", "୧"],
  ["⤜(", ")⤏"],
  ["☞", "☞"],
  ["ᑫ", "ᑷ"],
  ["ᑴ", "ᑷ"],
  ["ヽ(", ")ﾉ"],
  ["\\(", ")/"],
  ["乁(", ")ㄏ"],
  ["└[", "]┘"],
  ["(づ", ")づ"],
  ["(ง", ")ง"],
  ["ლ(", "ლ)"],
  ["✌(", ")✌"],
  ["🤜(", ")🤜"],
  ["👉(", ")👉"],
];

// Endpoint to get a random lenny face
app.get('/lennyAllFaces', (req, res) => {
  res.json({ Faces: {
    Eyes : LennyEyes ,
    Mouths : LennyMouths ,
    Ears : LennyEars ,
  } });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});