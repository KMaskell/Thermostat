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

get '/cat' do
    @random_name = ['Amigo', 'Oscar', 'Viking'].sample
    erb(:index)
end

