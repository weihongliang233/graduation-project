function trans(obj) {
    let strList = obj.lines.map(ele=>{
        return ele.words
    })
    return strList.join()
}

var obj = {
    "orientation": "UP",
    "errorCode": "0",
    "lines": [
      {
        "boundingBox": "61,10,535,10,535,41,61,41",
        "words": "5.结构相似性(Structural Similarity Index, SSIM)"
      },
      {
        "boundingBox": "61,49,965,49,965,76,61,76",
        "words": "结构相似性用于衡量两幅图像相似度。这个指标首先由德州大学提出,结构相似性的范围"
      },
      {
        "boundingBox": "19,87,962,87,962,115,19,115",
        "words": "为0到。当两张图像相同时, SSIM的结果会等于1。所以两张图像越像SSIM值就越接近于1,"
      },
      {
        "boundingBox": "20,127,828,127,828,154,20,154",
        "words": "两张图像越不接近时其SSIM值就越接近于0.SSIM的计算方法如式(4-6)所示:"
      }
    ]
  };  


  console.log(trans(obj))