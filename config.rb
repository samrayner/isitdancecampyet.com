page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :haml, { format: :html5, attr_wrapper: '"' }

activate :sprockets
activate :directory_indexes

configure :build do
  activate :minify_css
  activate :minify_javascript
end
