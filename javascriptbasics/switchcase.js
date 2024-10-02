function chooseBrowser(browser){
    switch (browser) {
        case 'chrome':
            console.log('launch chrome');            
            break;
            
        case 'edge':
            console.log('launch edge');            
            break;
            
        case 'firefox':
            console.log('launch firefox');            
            break;
    
        default:
            console.log('no matching browser...... launch safari'); 
            break;
    }

}

chooseBrowser('edge');