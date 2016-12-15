
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('delete from sticker; alter sequence sticker_id_seq restart with 1')
    .then(function () {
      const stickers = [{
        image_url: 'https://d3spquiph2sexc.cloudfront.net/assets/clear-5f3c4f7aa12b49b0671688eab01581b3.gif',
        name: 'Octocrest',
        user_id: '1'
      },{
        image_url: 'http://ih1.redbubble.net/image.298104113.2757/sticker,375x360.u2.png',
        name: 'Mermaid!',
        user_id: '2'
      },{
        image_url: 'https://d3spquiph2sexc.cloudfront.net/assets/clear-5f3c4f7aa12b49b0671688eab01581b3.gif',
        name: 'I feel grate!',
        user_id: '1'
      },{
        image_url: 'https://d3spquiph2sexc.cloudfront.net/assets/clear-5f3c4f7aa12b49b0671688eab01581b3.gif',
        name: 'Mildly creepy bunny',
        user_id: '2'
      }]
      return knex('sticker').insert(stickers);
    });
};
