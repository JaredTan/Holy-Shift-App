class Team < ApplicationRecord
  has_many :members, class_name: 'User', foreign_key: 'user_id'
end