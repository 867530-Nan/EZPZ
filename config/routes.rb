Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :user
    post '/user/:user_id/children', to: 'children#create'
    resources :children
    get 'location', to: 'location#show'
    resources :activities do
      resources :user_activities
    end
    resources :log
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
