Rails.application.routes.draw do
  root 'root#index'
  get 'messages/random'
end
