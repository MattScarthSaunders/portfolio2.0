export function typingEffect(
  elem: HTMLElement | null,
  inputStr: string,
  time: number,
  iscode: boolean
) {
  const timeBetween = time * (Math.random() * 10)
  let str = ''

  if (!iscode) {
    const sents = inputStr.split('. ')

    str = sents.join('. \n')
  } else {
    str = inputStr
  }

  let index = -1

  function go() {
    if (++index < str.length && elem) {
      elem.innerHTML = elem.innerHTML + str.charAt(index)

      let time = timeBetween
      if (str.charAt(index) == '.' && !iscode) time = 200

      setTimeout(go, time)
    }
  }

  go()
}
