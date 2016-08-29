import DS from 'ember-data';

const {
  attr
} = DS;

export default DS.Model.extend({

  /**
   * Title of the video
   *
   * @property `title`
   * @type {String}
   */
  title: attr('string'),

  /**
   * Description of the video
   *
   * @property `description`
   * @type {String}
   */
  description: attr('string'),

  /**
   * Video created date
   *
   * @property `created-at`
   * @type {String} - timestamp
   */
   createdAt: attr('string'),

   /**
    * Path for video thumbnail image
    *
    * @property `thumbnailImage`
    * @type {String} - Image path
    */
    thumbnailImage: attr('string'),

    /**
    * Path of the video source
    *
    * @property `videoSource`
    * @type {String} - Path of the video
    */
    videoSource: attr('string'),

    /**
    * Duration of the video
    *
    * @property `duration`
    * @type {String}
    */
    duration: attr('string'),

    /**
     * Category of the video
     *
     * @property `category`
     * @type {String}
     */
     category: attr('string'),

});
