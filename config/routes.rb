# config/routes.rb
Rails.application.routes.draw do
  root 'pages#home'
  get 'pages/home', to: 'pages#home'
  get 'about', to: 'pages#about'
  get 'skills', to: 'pages#skills'
  get 'timeline', to: 'pages#timeline'
  get 'projects', to: 'pages#projects'
  get 'contact', to: 'pages#contact'
  post 'contact_submit', to: 'pages#contact_submit' 
end
