const ffmpeg = require('ffmpeg');

exports.convert = (req, res) => {
  console.log('Convert file');
  if (req.file) {
    console.log(req.file.path);

    const output = Date.now() + '-' + 'convertedAudio.mp3';

    try {
      var process = new ffmpeg(req.file.path);
      process.then(
        function (video) {
          // Video metadata
          console.log(video.metadata);
          // FFmpeg configuration
          console.log(video.info_configuration);
        },
        function (err) {
          console.log('Error: ' + err);
        }
      );
    } catch (e) {
      console.log(e.code);
      console.log(e.msg);
    }

    // new ffmpeg(req.file.path, function (err, video) {
    //   if (!err) {
    //     console.log('The video is ready to be processed');
    //     res.download(output, (error) => {
    //       if (error) {
    //         throw error;
    //       } else {
    //         fs.unlinkSync(req.file.path);
    //         fs.unlinkSync(output);
    //       }
    //     });
    //   } else {
    //     console.log(`Convert Error: ${err}`);
    //     return;
    //   }
    // });

    // exec(`ffmpeg -i ${req.file.path} ${output}`, (error, stdout, stderr) => {
    //   if (error) {
    //     console.log(`Convert Error: ${error}`);
    //     return;
    //   } else {
    //     console.log('File is converted');
    //     res.download(output, (error) => {
    //       if (error) {
    //         throw error;
    //       } else {
    //         fs.unlinkSync(req.file.path);
    //         fs.unlinkSync(output);
    //       }
    //     });
    //   }
    // });
  }
};
