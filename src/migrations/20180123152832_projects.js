'use strict'

exports.up = (knex) => {
  return knex.schema.createTable('projects', table => {
    table.increments()
    table.string('title')
    table.text('imageURL')
    table.string('skillsHighlight')
    table.string('description')
    table.boolean('javascript')
    table.boolean('htmlcss')
    table.boolean('java')
    table.boolean('cplusplus')
    table.boolean('objectivec')
    table.boolean('lisp')
    table.boolean('python')
    table.boolean('otherlanguage')
    table.boolean('react')
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('projects')
}
