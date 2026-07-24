// تحديد المسار الدقيق لملف wasm (الشبكة العصبية)
self.locateFile = (file) => `https://cdn.jsdelivr.net/npm/stockfish.wasm@0.10.0/${file}`;

// تحميل محرك Stockfish من jsDelivr
importScripts('https://cdn.jsdelivr.net/npm/stockfish.wasm@0.10.0/stockfish.js');
