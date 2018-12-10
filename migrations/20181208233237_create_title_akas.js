
exports.up = function(knex, Promise) {
    return knex.schema.createTable('title_akas', (table) => {
        table.increments('id');
        table.string('titleId').notNullable; // a tconst, an alphanumeric unique identifier of the title
        table.integer('ordering') // a number to uniquely identify rows for a given titleId
        table.strting('title') //  the localized title
        table.string('region') // the region for this version of the title
        table.string('language') // the language of the title
        table.array('types') //Enumerated set of attributes for this alternative title. One or more of the following: "alternative", "dvd", "festival", "tv", "video", "working", "original", "imdbDisplay". New values may be added in the future without warning
        table.array('attributes') // Additional terms to describe this alternative title, not enumerated
        table.boolean('isOriginalTitle') // 0: not original title; 1: original title
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('title_akas');
};
