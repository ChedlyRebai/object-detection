import { pipeline } from '@xenova/transformers';

export default async function page() {
    // Allocation a pipeline for translation
let translator:any = await pipeline('translation', 'Xenova/nllb-200-distilled-600M');

// Translate from English to Greek
let result = await translator('I like to walk my dog.', {
    src_lang: 'eng_Latn',
    tgt_lang: 'ell_Grek'
});
    return (
        <div>
            <h1>{result}</h1>
            <p>This is a test page</p>
        </div>
    )
}