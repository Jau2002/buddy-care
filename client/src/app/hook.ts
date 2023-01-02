import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, SelectorsApp } from './app';

export const useAppDispatch: AppDispatch = useDispatch;

export const useAppSelector: SelectorsApp = useSelector;
