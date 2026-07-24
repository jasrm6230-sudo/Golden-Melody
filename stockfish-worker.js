(async function() {
    // روابط المحرك من unpkg (مضمونة CORS)
    const wasmUrl = 'https://unpkg.com/stockfish.wasm@0.10.0/stockfish.wasm';
    const jsUrl = 'https://unpkg.com/stockfish.wasm@0.10.0/stockfish.js';

    try {
        // تحميل ملف wasm يدوياً
        const response = await fetch(wasmUrl);
        const wasmBuffer = await response.arrayBuffer();

        // تجهيز Module مع wasmBinary قبل تحميل كود المحرك
        self.Module = {
            wasmBinary: wasmBuffer,
            // إلغاء أي محاولة لتحميل ملف خارجي
            locateFile: (file) => file
        };

        // استيراد المحرك (سيرى Module جاهزاً)
        importScripts(jsUrl);

    } catch (err) {
        self.postMessage('error: ' + err.message);
    }
})();
