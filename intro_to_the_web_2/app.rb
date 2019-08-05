require 'sinatra'

get '/' do 
    "Hello!" 
end

get '/secret' do
    'abc'
end

get '/film' do
    'jaws'
end

get '/random-cat' do
    @random_name = ['Amigo', 'Oscar', 'Viking'].sample
    erb(:index)
end

post '/named-cat' do
    p params
    @random_name = params[:name]
    erb :index
end

get '/named-cat' do
    @random_name = params[:name]
    erb :index
end

get '/cat-form' do
    p params
    erb :cat_form
end

