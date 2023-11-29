/**
 * Removes obsolete forwardSlashes and quotes 
 */
export function textChapterCleanUp(response) {
    const { title, content, description } = response;
    return Object.assign({}, {
        ...response,
        title: replaceObsolete(title).trim(),
        description: description.trim(),
        content: replaceObsolete(content)
    });
}

function replaceObsolete(str) {
    return str.replaceAll('\n Translator', '').replaceAll('\n', '').replaceAll('\"', '').replaceAll('Nyoi-Bo Studio Editor: Nyoi-Bo Studio', '')
}


/**
 * Removes or adds curse words
 */
// curseWord(){ }

/**
 * Replaces character names
 *
 */
// baptized(){ }