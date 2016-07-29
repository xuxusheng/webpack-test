/**
 * Created by xusheng-antiy on 2016/7/28.
 */

export const generateText = () => {
    const element = document.createElement('h2')
    element.innerHTML = '我是sub里生成的!'
    return element
}