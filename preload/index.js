
const bv2Notion = (url) => {
    // const re = /(BV.*?).{10}/
    // const result = re.exec(url);
    const bv = url.match(/(BV.*?).{10}/)[0]
    let p = null;
    try {
        p = url.match(url.match(/p=(\d+)/)[1]);
    } catch (error) {
        p = null
    }
    
    let result = "player.bilibili.com/player.html?bvid="+bv
    if (p) {
        result += "&p="+p
    }
    return result
}

window.exports = {
    converter: {
        mode: 'none',
        args: {
            enter: (action) => {
                window.utools.hideMainWindow()
                const url = bv2Notion(action.payload)
                window.utools.copyText(url)
                window.utools.showNotification(url+"已复制")
                window.utools.outPlugin()
            }
        }
    }
}