// تحديد المسار الصحيح لملف stockfish.wasm (يحتوي الشبكة العصبية NNUE)
self.locateFile = (file) => `https://lichess1.org/stockfish/${file}`;

// تحميل كود المحرك من Lichess (خفيف وقوي جداً)
importScripts('https://lichess1.org/stockfish/stockfish.js');
