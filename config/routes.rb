Rails.application.routes.draw do
  get 'users/index'

  get 'users/show'

  get 'users/new'

  get 'users/edit'

  get 'user_activities/index'

  get 'user_activities/show'

  get 'user_activities/new'

  get 'user_activities/edit'

  get 'logs/index'

  get 'logs/show'

  get 'logs/new'

  get 'logs/edit'

  get 'children/index'

  get 'children/show'

  get 'children/new'

  get 'children/edit'

  get 'activities/index'

  get 'activities/show'

  get 'activities/new'

  get 'activities/edit'

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
