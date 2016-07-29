/**
 * Created by xusheng-antiy on 2016/7/29.
 */


export default () => {
    const xhr = new XMLHttpRequest()

    xhr.open('post', '/api/name')

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText)
        }
    }

    xhr.send()
}

