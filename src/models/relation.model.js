
const Genre = require('./genre.model')
const GenreTranslation=require('./genre_translation.model')
const Movie = require('./movie.model')
const MovieTranslation=require('./movie_translation.model')
const Episod=require('./episod.model')
const EpisodTranslation=require('./episode_translation.model')
const Show=require('./show.model')
const ShowTranslation=require('./show_translation.model')
const Page=require('./page.model')
const PageTranslation=require('./page_translation.model')
const Role=require('./role.model')
const Language=require('./language.model')
const User=require('./user.model')
 const Relation=()=>{
   //show-show_translation
   Role.hasMany(User,{
    foreignKey: 'role_id'
  })
  User.belongsTo(Role,{
    foreignKey: 'show_id'
  })
  //genre-movie
  Movie.belongsTo(Genre,{
    foreignKey: 'genere_id'
  })
  Genre.hasMany(Movie,{
    foreignKey: 'genere_id'
  })
  //genre-episod
  Episod.belongsTo(Genre,{
    foreignKey: 'show_id'
  })
  Genre.hasMany(Episod,{
    foreignKey: 'show_id'
  })
  //genre-genre_translation
  Genre.hasMany(GenreTranslation,{
    foreignKey: 'genres_id'
  })
  GenreTranslation.belongsTo(Genre,{
    foreignKey: 'genres_id'
  })
  //movie-movie_translation
  Movie.hasMany(MovieTranslation,{
    foreignKey: 'movie_id'
  })
  MovieTranslation.belongsTo(Movie,{
    foreignKey: 'movie_id'
  })
  //page-page_translation
  Page.hasMany(PageTranslation,{
    foreignKey: 'page_id'
  })
  PageTranslation.belongsTo(Page,{
    foreignKey: 'page_id'
  })
  //episod-episod_translation
  Episod.hasMany(EpisodTranslation,{
    foreignKey: 'episode_id'
  })
  EpisodTranslation.belongsTo(Episod,{
    foreignKey: 'episode_id'
  })
  //show-show_translation
  Show.hasMany(ShowTranslation,{
    foreignKey: 'show_id'
  })
  ShowTranslation.belongsTo(Show,{
    foreignKey: 'show_id'
  })
//language-page_translation
Language.hasOne(PageTranslation,{
  foreignKey: 'language_id'
})
//language-show_translation
Language.hasOne(ShowTranslation,{
  foreignKey: 'language_id'
})//language-movie_translation
Language.hasOne(MovieTranslation,{
  foreignKey: 'language_id'
})//language-eisod_translation
Language.hasOne(EpisodTranslation,{
  foreignKey: 'language_id'
})
 }
 module.exports = Relation;
