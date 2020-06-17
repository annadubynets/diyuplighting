require 'rubygems'
require 'sinatra'
require 'haml'

get '/' do
  haml :index
end

get '/state' do
  haml :state
end